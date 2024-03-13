#VanLife

Van Life is a web application built in by using React, HTML,CSS. It's an application that lets users to rent a camp van for their next trip.
This application is focusing on React Router 6, having over 10 routes, nested routes and protected routes. Also, it's using Firebase Database.

So, let's see:

This is the home page of VanLife:
![1](https://github.com/Bianca2307/van-life/assets/97783376/63a4387a-ca18-4435-afe5-745d32ad41c5)

The button "Find your van" is redirecting us to "Vans" page:
![2](https://github.com/Bianca2307/van-life/assets/97783376/9cb31bb0-e8ad-40d1-b0ce-e7897b03bc6a)
![3](https://github.com/Bianca2307/van-life/assets/97783376/3d410718-96ca-448e-8215-50e7113146d1)

In the "Vans" page we can filter the vans by their type by using "useSearchParams" hook from React-Router-Dom:
![4](https://github.com/Bianca2307/van-life/assets/97783376/1db0c97c-6d74-4ac4-a481-5c5ff2f478a8)
![5](https://github.com/Bianca2307/van-life/assets/97783376/fc7566b1-a0d1-44eb-b3d1-d8bfbfc3edc8)
![6](https://github.com/Bianca2307/van-life/assets/97783376/0ab6a3de-5538-4ce5-9f89-4271c38ce6d2)

If we click on a van, we go to "VanDetail" page, by using "useSearchParams" hook:

![14](https://github.com/Bianca2307/van-life/assets/97783376/447d8202-7b8d-4c8e-a914-0f1649c675a8)

 The "About" page:
 ![7](https://github.com/Bianca2307/van-life/assets/97783376/96a018c8-1055-4aca-a38f-885d2716b84a)

The Header of the app is built by practicing nested routes, so if we click on the "Host" page, we will go to another page where we have another navigation bar using nested routes:
![8](https://github.com/Bianca2307/van-life/assets/97783376/468e98c7-942b-4487-91f3-e3d2457184f5)
![9](https://github.com/Bianca2307/van-life/assets/97783376/51748087-5caa-4f57-a868-1b91df606bf0)

The "Income" page:
![10](https://github.com/Bianca2307/van-life/assets/97783376/8b0fd762-cd8c-4c6d-a5a2-a4e4e5af7a3e)

The "Host Vans" page:
![11](https://github.com/Bianca2307/van-life/assets/97783376/1a67c6bc-7d6d-4e74-ba15-6947d5120545)

If we click on a host van, we go to "HostVanDetail" page, where I have practiced again the nested routes:
![13](https://github.com/Bianca2307/van-life/assets/97783376/6ecadfd9-faa8-4cfb-a022-6f6776b9724f)

In the "HostVanDetail" page is antoher nav bar where we can see the Details, Pricing and Photos of the host van:
![15](https://github.com/Bianca2307/van-life/assets/97783376/0a8c8479-0fb3-4b37-b6be-2dcecfe1d076)
![16](https://github.com/Bianca2307/van-life/assets/97783376/b44edb8e-f8cc-473c-9dda-d96edc7dd0e0)


My protected route is represent by the fact that if we are not authenticated and we try to acces the "Host" page, we will be redirected to the login page:
![17](https://github.com/Bianca2307/van-life/assets/97783376/bd4dd4ba-8166-4d95-a052-677902e4a8fb)
After login in, we will be redirected exactly to the page we tried to access before login, by using the "useLocation" hook from React-Router-Dom.

If we try to acces a page that doesn't exist, we will see this page:
![18](https://github.com/Bianca2307/van-life/assets/97783376/d0ecccae-737a-48c7-bf80-db549235bca5)

