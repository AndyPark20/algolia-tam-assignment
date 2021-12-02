*Question 1*


From: marissa@startup.com
Subject:  Bad design

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Thanks,
Marissa


-------------------------------------------------------My Response (Question 1)----------------------------------------------------------------------
Hello Marissa,
Thank you very much for your feedback!
First and foremost, I sincerely apologize for the inconvenience. I completely understand that this can be a very frustrating issue which can impact the seamless user experience that we want our customers to have.
The current dashboard design you are experiencing is intended to ensure that each functionality, in this case clearing and deleting indexes, are achieved at the shortest response time while obtaining the highest accuracy.
Let me discuss with my internal team to see if we can find a solution where we can have these two features next to each other to provide the experience that we as algolia want you to have!
Again, I apologize for the trouble, however we will do our best to find a solution as soon as possible. If you have any questions or additional concerns, please do not hesitate to directly reach me at (999)-888-1234.

Sincerely,
Andy Park


--

*Question 2*:

From: carrie@coffee.com
Subject: URGENT ISSUE WITH PRODUCTION!!!!

Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".

Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?

Please advise on how to fix this. Thanks.

-------------------------------------------------------My Response (Question 2)----------------------------------------------------------------------
Hello Carrie,
I want to say thank you so much for being our loyal customer and on behalf of algolia, I apologize for the trouble that you are experiencing.
I completely understand your frustration especially when you are paying for our services.

From what I can see, it looks like the string that contains the user feedbacks might potentially have too many characters which might affect the JSON object size when getting pushed to algolia’s server. While I check to see if there is a way to increase the size of the JSON object on our server, as a temporary solution you can try to limit the number of characters to 100 on the front-end side for now.

If you need to directly reach me, please do not hesitate to give me a call at (999)-888-1234.
I will get back to you as soon as I have a solution!


Sincerely,
Andy Park


--

*Question 3*:


From: marc@hotmail.com
Subject: Error on website

Hi, my website is not working and here's the error:

![error message](./error.png)

Can you fix it please?

-------------------------------------------------------My Response (Question 3)----------------------------------------------------------------------

Hello Marc,
Thank you very much for the email!
I’m so sorry that you are experiencing this trouble!
From what I see it looks like the built-in function searchkit can’t be found anywhere in your components. As a result, throwing uncaught reference Error.
Can you try importing the searchkit function from algolia directory?
For example:
Import {searchkit} from ‘algoliasearch’
I am available for a zoom call so that I can walk you thru the process as well.
Let me know if you are available today or anytime this week.
Thanks!
