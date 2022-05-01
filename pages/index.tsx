import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts'
 
import { initialData } from '../database/products' 

const Home: NextPage = () => {
  return (
    <ShopLayout title={'Teslo'} pageDescription={'Ecommerce Teslo'}>

      <Typography variant='h1' component='h1'>Teslo - Shop </Typography>
      <Typography variant='h2' sx={{mb: 1}}>Todos los productos</Typography>
    
      <Grid container spacing={4}>
          {
            initialData.products.map( product =>(
              <Grid item xs={6} sm={4} key={product.slug} >
                <Card>
                  <CardActionArea>
                    <CardMedia 
                      component='img'
                      image={`products/${product.images[0]}`}
                    />
                  </CardActionArea>
                  
                </Card>

              </Grid>
            ))
          }
      </Grid>


    </ShopLayout>
  )
}

export default Home
