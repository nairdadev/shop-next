import { Box, Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts"


const Custom404 = () =>{
    return(
        <ShopLayout title='Page Not Found' pageDescription="No hay nada para mostrar">
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='calc(100vh - 200px)'
                sx={{ flexDirection: {xs: 'column', sm:'row'}}}
            >
                <Typography variant="h1" component="h1" fontSize={80}>404 |</Typography>
                <Typography marginLeft={2}> No encontramos ninguna página.</Typography>
            </Box>
        </ShopLayout>
    )
}

export default Custom404;