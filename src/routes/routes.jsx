import { Route, Routes } from 'react-router-dom'

import Home from '../containers/Home'
import Register from '../containers/Register'
import EditRegister from '../containers/EditRegister'
import ViewRegister from '../containers/ViewRegister'
import DefaultLayout from '../layout/DefaultLayout'

function Router() {


    return(
        <Routes>
            <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/EditRegister' element={<EditRegister />} />
            <Route path='/ViewRegister' element={<ViewRegister />} />
            </Route>
        </Routes>
    )
}

export default Router