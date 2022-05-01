import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material";
import React from "react";
import NextLink from "next/link";
import { SearchOffOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6"> Teslo - Shop</Typography>
            <Typography sx={{ ml: 0.5 }}></Typography>
          </Link>
        </NextLink>
        <Box flex={1}/>
            <Box sx={{display: {xs: 'none', sm:'block'}}}> 
                <NextLink href='/category/gas' passHref>
                    <Link>
                        <Button>Hombres</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/gas' passHref>
                    <Link>
                        <Button>Mujeres</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/gas' passHref>
                    <Link>
                        <Button>Niños</Button>
                    </Link>
                </NextLink>
                                                                                                              
            </Box>
        <Box flex={1}/>

        <IconButton>
            <SearchOutlined />
        </IconButton>

        <NextLink href='/category/gas' passHref>
            <Link>
                <IconButton>
                    <Badge badgeContent={2} color="secondary">
                        <ShoppingCartOutlined />
                    </Badge>
                </IconButton>
            </Link>
        </NextLink>

        <Button>
            Menú
        </Button>

      </Toolbar>
    </AppBar>
  );
};
