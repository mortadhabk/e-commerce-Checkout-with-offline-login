import useSWR from "swr";
import fetcher from "./fetcher";
export function useProduct() {
  const url = "http://localhost/backend-magento/graphql";
  const { data, error } = useSWR(url, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
