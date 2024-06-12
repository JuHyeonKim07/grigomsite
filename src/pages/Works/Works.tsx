import { useLayoutEffect } from 'react';
import VerticalTabs from '../../component/Category/Category';
import Loader from '../../component/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypeSelector';
import { youtubeListPlaylistAction } from '../../redux/youtubeListPlaylist';

const CHANNEL_ID = 'UCBXwSHfXqRIJkaPs3ZMzKVA';

function Works() {
    const dispatch = useAppDispatch();
    useLayoutEffect(() => {
        dispatch(youtubeListPlaylistAction(CHANNEL_ID));
    }, [dispatch]);

    const { loading } = useAppSelector((state) => state.youtubeCategory);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="title-container">
                        <div className="title">
                            <span>WORKS</span>
                        </div>
                    </div>
                    <VerticalTabs />
                </>
            )}
        </>
    );
}

export default Works;
