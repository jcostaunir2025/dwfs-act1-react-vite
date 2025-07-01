import {Box, Typography, Button, Divider} from "@mui/material";

export default function ButtonFilters({ opciones, onFilterChange }) {
    const handleChange = (key, filter) => () => {
        onFilterChange({[key]:filter});
    };

    return (Object.entries(opciones).length > 0 && (
        <Box sx={{p: 2, width: 250}}>
            <Divider sx={{mb: 2}}></Divider>
            <Typography variant="h6">Categorías</Typography>
            {Object.entries(opciones).map(([key, filtros]) => (
                key !== "stockValues" && (
                    <Box key={key} sx={{mb: 2}}>
                        <Typography variant="subtitle2" sx={{mb: 2, mt: 2, fontWeight: 'bold'}}>
                            {key}
                        </Typography>
                        {filtros.map((filtro) => (
                            <Button variant="outlined" size="small" onClick={handleChange(key, filtro.key)}
                                    sx={{ml: 1, mb: 1}}>
                                {filtro.key} ({filtro.count})
                            </Button>))}
                    </Box>)))}
        </Box>
    ));
}
