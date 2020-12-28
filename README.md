# GrigomSite

그리곰 포토폴리오 사이트

#Vimeo API
   useEffect(() => {
        async function get() {
            await axios.get("https://api.vimeo.com/users/129526601/videos", {
                headers: {
                    Authorization: `bearer ${accessToken}`
                }
            }).then(res => {
                setData(res.data)
                console.log(data)
            }).catch(error => console.error(error))
        }
        get();
    }, []); //input에 값이 변경이 되었을때 effect를 실행한다
