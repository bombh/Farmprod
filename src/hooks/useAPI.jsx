import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "@env";

const baseUrl = 'https://www.farmprod.be/ghost/api/content/'
const key = API_KEY

const useAPI = (method, endpoint, query) => {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(null)

   const options = {
      method: method,
      url: `${baseUrl}${endpoint}/?key=${key}}`,
      params: { ...query }
   }

   const fetchData = async () => {
      setIsLoading(true);
      setError(null)

      try{
         console.log('options: ', options.url)
         const result = await axios.request(options);
         setData(result)
         console.log(result)

      } catch (error) {
         console.log(error)
         alert('Error fetching data, please try again later...')

      } finally {
         setIsLoading(false)
      }
   }

   useEffect(() => {
      fetchData();
   }, []);

   const refetch = () => {
      setIsLoading(true);
      fetchData();
   }
}

export default useAPI
