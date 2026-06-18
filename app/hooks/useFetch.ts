"use client";
import { useEffect, useState } from "react";

export function useFetch<T>({ url }: { url: string }) {
  const [data, setData] = useState<T[]>([]);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network issues");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        setPending(false);
      })
      .catch((err) => {
        setError(err);
        setPending(false);
      });
  }, [url]);
  return { data, pending, error };
}

export function useFetchS<T>({ url }: { url: string }) {
  const [data, setData] = useState<T>();
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network issues");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        setPending(false);
      })
      .catch((err) => {
        setError(err);
        setPending(false);
      });
  }, [url]);
  return { data, pending, error };
}

// const categories = useFetch("https://api.escuelajs.co/api/v1/categories");
