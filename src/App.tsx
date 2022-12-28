import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root, {loader as rootLoader} from "./routes/Root";
import Content, {loader as contentLoader} from "./components/Content/Content";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        loader: rootLoader,
        children: [
            {
                path: "items/:itemId",
                element: <Content/>,
                loader: contentLoader,
            },
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
