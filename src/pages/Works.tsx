import { CategoryTabs } from '../component/CategoryTabs';
import VerticalTabs from '../component/Category/Category';
import '../css/Works.css';

function Works() {
    return (
        <>
            <div className="title-container">
                <div className="title">
                    <span>WORKS</span>
                </div>
            </div>
            <VerticalTabs />
        </>
    )
}

export default Works
