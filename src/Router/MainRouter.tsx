import {createBrowserRouter} from "react-router-dom"
import Layout from "../Block/Layout"
import { HomeScreen } from "../Pages/HomeScreen"
import Upload from "../Pages/Upload"

export const MainRouter = createBrowserRouter([
    {
        path : "/",
        element: <Layout/>,
       children:[{
        index: true,
        element: <HomeScreen/>
    }]},
    {
        path : "/UploadBook",
        element: <Upload/>
    }
])