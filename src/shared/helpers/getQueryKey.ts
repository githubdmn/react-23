import { ApiResource } from '../../enums/apiResource';

export const getQueryKey = (
  resource: ApiResource,
  param?: string | number | string[]
) => {
  if (!param) return [resource];

  if (typeof param === 'string' || typeof param === 'number')
    return [resource, param];

  return [resource, ...param];
};
