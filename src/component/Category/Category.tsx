import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useRef, useState } from "react";
import { useAppSelector } from '../../hooks/useTypeSelector';
import YoutubeVideoList from './YoutubeVideoList';
import MenuIcon from '@mui/icons-material/Menu';

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
    const { cartegory } = useAppSelector((state) => state.youtubeCategory);
    const [tabVisible, setTablVisible] = useState(false);
    const CartegoryRef = useRef<HTMLDivElement>(null);

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const tabVisibleBtn = () => {
        if (!tabVisible) {
            if (CartegoryRef.current) {
                CartegoryRef.current.style.marginLeft = '-200px';
                setTablVisible(true);
            }
        } else {
            if (CartegoryRef.current) {
                CartegoryRef.current.style.marginLeft = '';
                setTablVisible(false);
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
                        TabIndicatorProps={{
                            sx: {
                                backgroundColor: 'orange', // indicator 색상
                                width: '3px', // indicator 두께
                                borderRadius: '4px', // indicator 모서리 둥글게
                                height: 'auto', // indicator 높이 자동 조절
                            }
                        }}
                    >
                        {cartegory && cartegory.map((value, index) => (
                            <Tab label={value.snippet.title} key={index}
                                sx={{
                                    color: 'black', // 기본 폰트 색상
                                    '&.Mui-selected': {
                                        color: 'orange', // 선택된 탭의 폰트 색상
                                    },
                                }}
                            />
                        ))}
                    </Tabs>
                    <div className={`tabCloseBtn`} onClick={tabVisibleBtn} >
                        <MenuIcon />
                    </div>
                </div>

                {/* 영상 리스트 */}
                {cartegory && cartegory.map((item, index) => (
                    <TabPanel value={value} index={index} key={item.id}>
                        <YoutubeVideoList playlistId={item.id} />
                    </TabPanel>
                ))}
            </Box>
        </>
    );
}
