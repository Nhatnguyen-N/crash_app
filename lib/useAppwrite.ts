import { useEffect, useState } from "react";
import { Models } from "react-native-appwrite";
import { getAllPosts } from "./appwrite";
import { Alert } from "react-native";

const useAppwrite = (fn: any) => {
  const [data, setData] = useState<Models.Document[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await fn();
      setData(res);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {

    fetchData();
  }, []);
  const refetch = () => fetchData()

  return { data, isLoading, refetch }
}
export default useAppwrite;