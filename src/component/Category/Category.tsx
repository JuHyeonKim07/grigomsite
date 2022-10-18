import { useEffect } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypeSelector';
import { getYoutubeList_PlayList } from '../../redux/youtubeList_PlayList';
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
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector((state) => state.youtube_PlaylistSlice);

    useEffect(() => {
        if (!data) {
            dispatch(getYoutubeList_PlayList());
        }
    }, [])


    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                {data && data.items.map((value, index) => {
                    return (
                        <Tab label={value.snippet.title} {...a11yProps(index)} key={value.id} onClick={() => console.log(value.id)} />
                    )
                })}
            </Tabs>

            {data && data.items.map((item, index) => {
                return (
                    <TabPanel value={value} index={index} key={item.id}>
                        <YoutubeTab channelId={item.id}/>
                    </TabPanel>
                )
            })}
        </Box>
    );
}