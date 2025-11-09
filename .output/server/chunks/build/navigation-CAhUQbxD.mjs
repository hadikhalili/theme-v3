import { P as useRuntimeConfig, R as queryContent, a7 as withContentBase, a8 as encodeQueryParams, a9 as addPrerenderPath, aa as shouldUseClientDB, ab as jsonStringify, U as useContentPreview } from './server.mjs';
import { G as hash } from '../runtime.mjs';

const fetchContentNavigation = async (queryBuilder) => {
  const { content } = useRuntimeConfig().public;
  if (typeof queryBuilder?.params !== "function") {
    queryBuilder = queryContent(queryBuilder);
  }
  const params = queryBuilder.params();
  const apiPath = content.experimental.stripQueryParameters ? withContentBase(`/navigation/${`${hash(params)}.${content.integrity}`}/${encodeQueryParams(params)}.json`) : withContentBase(`/navigation/${hash(params)}.${content.integrity}.json`);
  {
    addPrerenderPath(apiPath);
  }
  if (shouldUseClientDB()) {
    const generateNavigation = await import('./client-db-fRaG3qC5.mjs').then((m) => m.generateNavigation);
    return generateNavigation(params);
  }
  const data = await $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: content.experimental.stripQueryParameters ? void 0 : {
      _params: jsonStringify(params),
      previewToken: useContentPreview().getPreviewToken()
    }
  });
  if (typeof data === "string" && data.startsWith("<!DOCTYPE html>")) {
    throw new Error("Not found");
  }
  return data;
};

export { fetchContentNavigation as f };
