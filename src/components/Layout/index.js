import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'>&lt;body&lt;</span>

                <Outlet />

                <span className='tags bottom-tags'>&lt;/body&lt;
                    <br />
                    <span className='bottom-tag-html'>&lt;/html&lt;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout;