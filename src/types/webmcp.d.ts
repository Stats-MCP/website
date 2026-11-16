interface ModelContextToolInit {
  name: string;
  title?: string;
  description: string;
  inputSchema?: object;
  annotations?: { readOnlyHint?: boolean };
  execute: (
    input: Record<string, unknown>,
    options?: { signal?: AbortSignal }
  ) => Promise<unknown>;
}

interface ModelContext {
  registerTool: (
    tool: ModelContextToolInit,
    options?: { signal?: AbortSignal }
  ) => Promise<void> | void;
}

interface Document {
  readonly modelContext?: ModelContext;
}

interface Navigator {
  readonly modelContext?: ModelContext;
}
