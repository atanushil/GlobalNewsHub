import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { Container, Grid, Button, Box } from "@mui/material";

export default function News() {
  const [newsItems, setNewsItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-06-18&sortBy=publishedAt&apiKey=bdcb10d2d61f43f982f9fb2d7e311e6d";
        const response = await fetch(url);
        const data = await response.json();
        setNewsItems(data.articles);
        // console.log(data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = newsItems.slice(startIndex, startIndex + itemsPerPage);

  const isNextDisabled = startIndex + itemsPerPage >= newsItems.length;
  const isPreviousDisabled = currentPage === 1;

  return (
    <Container maxWidth="2xl" sx={{ mt: 0 }}>
      <h1 className="text-3xl uppercase text-blue-400 font-medium px-2 py-2 items-center flex justify-center">
        Top News
      </h1>
      <Grid container spacing={3} sx={{ mt: 0 }}>
        {selectedItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <NewsItem
              image_url={item.urlToImage}
              title={item.title}
              description={item.description}
              learn_more_url={item.url}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 , mb:4 ,mx:8}}>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePreviousPage}
          sx={{ mx: 1 }}
          disabled={isPreviousDisabled}
          className="flex j"
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNextPage}
          sx={{ mx: 1 }}
          disabled={isNextDisabled}
        >
          Next
        </Button>
      </Box>
    </Container>
  );
}
