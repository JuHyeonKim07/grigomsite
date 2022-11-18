import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../hooks/useTypeSelector';
import { youtubeList_Playlist } from '../../redux/youtubeList_Playlist';
import YoutubeTab from '../YoutubeTab';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            style={{ width: '100%' }}
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default function VerticalTabs() {
    const dispatch = useAppDispatch();
    const { loading, error, cartegory } = useAppSelector((state) => state.youtube_PlaylistSlice);
    const [tabVisible, setTablVisible] = useState(false)
    const CartegoryRef = useRef<HTMLDivElement>(null);



    useEffect(() => {
        if (cartegory.length === 0) {
            dispatch(youtubeList_Playlist('UCvpIHsNLXfpOj_uMgI62I2A'));
            // dispatch(youtubeList_Playlist('UCBXwSHfXqRIJkaPs3ZMzKVA'));
        }
    }, [])

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const tabVisibleBtn = () => {
        if (!tabVisible) {
            if (CartegoryRef.current) {
                CartegoryRef.current.style.marginLeft = '-200px'
                setTablVisible(true)
            }
        } else {
            if (CartegoryRef.current) {
                CartegoryRef.current.style.marginLeft = ''
                setTablVisible(false)
            }
        }
    };
    return (
        <>
            <Box
                className='category-container'
                sx={{ bgcolor: 'background.paper' }}
                ref={CartegoryRef}
            >
                <div style={{ display: 'flex' }}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', minWidth: '200px' }}
                    >
                        {cartegory && cartegory.map((value, index) => {
                            return (
                                <Tab label={value.snippet.title} key={index} />
                            )
                        })}
                    </Tabs>
                    <div className={`tabCloseBtn`} onClick={tabVisibleBtn} >
                        <div>
                            ME
                        </div>
                        <div>
                            NU
                        </div>
                    </div>
                </div>

                {cartegory && cartegory.map((item, index) => {
                    return (
                        <TabPanel value={value} index={index} key={item.id} >
                            <YoutubeTab playlistId={item.id} />
                        </TabPanel>
                    )
                })}
            </Box>
        </>
    );
}