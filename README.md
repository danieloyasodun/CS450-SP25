# Assignment 4 #

In this assignment, you will develop a dashboard that visualizes tweets and their predicted sentiments using the provided starter code and the dataset. The dashboard will include an interactive 2D scatter plot, where each tweet is represented by a circle. The location of each circle will be determined by the "Dimension 1" and "Dimension 2" columns from the dataset, and the color of each circle will correspond to the sentiment of the PredictedSentiment column of the dataset. The scatter plot will initially be empty, and after uploading the data, the chart will refresh. Additionally, the list of selected tweets will dynamically update based on the user's interaction with the data points on the scatter plot, as shown below:

![image](https://github.com/user-attachments/assets/898d509f-3fb1-4b87-8568-2f9f63cf3799)

## Deployment ## 
- Deploy your application to GitHub Pages. Ensure that the webpage is accessible online through a GitHub Pages URL.

## Submission ##
 -  Submit the app.js component and the link to your deployed application on GitHub Pages.

## Grading Rubric ## 
- ScatterPlot Component (60%)
  - The ScatterPlot should correctly render points based on "Dimension 1" and "Dimension 2" using appropriate scaling functions. Points must be color-coded by sentiment and support brush interaction for selecting and filtering tweets.
- Legend Component (20%)
  - The legend must clearly display color-coded circles and labels for each sentiment. It should be well-placed and easy to read as illustrated above.
- SelectedTweets Component (20%)
  - The SelectedTweets component should display selected tweets with correct sentiment colors and update dynamically based on brush selection as illustrated above.
