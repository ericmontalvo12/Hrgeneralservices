const ANTHROPIC_ADMIN_API_BASE = "https://api.anthropic.com/v1";
const ANTHROPIC_VERSION = "2023-06-01";

export interface ApiKey {
  id: string;
  type: "api_key";
  name: string;
  status: "active" | "inactive" | "archived";
  created_at: string;
  last_used_at: string | null;
  partial_key_hint: string;
  workspace_id: string | null;
  created_by: {
    id: string;
    type: "user" | "organization";
  };
}

export interface ApiKeyRetrievalError {
  type: "error";
  error: {
    type: string;
    message: string;
  };
}

/**
 * Retrieves an API key by ID using the Anthropic Admin API.
 *
 * NOTE: This must be called from a server-side context (Node.js, edge function,
 * etc.) to keep the admin API key secret. Never call this from browser code.
 *
 * @param apiKeyId  - The ID of the API key to retrieve (e.g. "apikey_...")
 * @param adminApiKey - Your Anthropic Admin API key (ANTHROPIC_ADMIN_API_KEY)
 */
export async function getApiKey(
  apiKeyId: string,
  adminApiKey: string,
): Promise<ApiKey> {
  const url = `${ANTHROPIC_ADMIN_API_BASE}/organizations/api_keys/${encodeURIComponent(apiKeyId)}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "anthropic-version": ANTHROPIC_VERSION,
      "X-Api-Key": adminApiKey,
    },
  });

  const data = (await response.json()) as ApiKey | ApiKeyRetrievalError;

  if (!response.ok) {
    const err = data as ApiKeyRetrievalError;
    throw new Error(
      `Anthropic Admin API error (${response.status}): ${err.error?.message ?? response.statusText}`,
    );
  }

  return data as ApiKey;
}
