import Header from 'components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' /*element={}*/></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
