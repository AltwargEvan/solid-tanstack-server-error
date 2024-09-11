import { createQuery } from "@tanstack/solid-query";
import { Show } from "solid-js";

export default function TestRoute() {
  const query = createQuery(() => ({
    queryFn: () => {
      throw Error("my error");
    },
    queryKey: ["key"],
  }));
  return (
    <div>
      Test Route
      <Show when={query.data}>Data</Show>
      <Show when={query.error}>Error</Show>
    </div>
  );
}
