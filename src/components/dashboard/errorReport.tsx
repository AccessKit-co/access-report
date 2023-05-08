import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import { IconHandStop, IconContrast2Off, IconTopologyFullHierarchy } from '@tabler/icons-react';
import DashboardCard from '../shared/DashboardCard';

const products = [
    {
        icon: IconHandStop,
        name: "Aria Issues",
        post: "Simple Issues, easy fix",
        priority: "High",
        pbg: "error.main",
        budget: "64",
    },
    {
        icon: IconContrast2Off,
        name: "Contrast",
        post: "Problems with colour contrasts",
        priority: "Medium",
        pbg: "secondary.main",
        budget: "35",
    },
    {
        icon: IconTopologyFullHierarchy,
        name: "Structure",
        post: "Structural issues impeding tools for disabled users",
        priority: "High",
        pbg: "error.main",
        budget: "128",
    },
];


const ProductPerformance = () => {
    return (

        <DashboardCard title="Error Report">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={1000}>
                                    Issue Type
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={1000}>
                                    Danger Level
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={1000}>
                                    Number
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.name}>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {product.name}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {product.post}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: product.pbg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={product.priority}
                                    ></Chip>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">{product.budget}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default ProductPerformance;
