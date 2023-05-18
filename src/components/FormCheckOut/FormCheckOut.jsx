import { Button, Grid, TextField } from "@mui/material";

export const FormCheckOut = ({ handleChange, handleSubmit, errors }) => {
  return (
    <form action="" onSubmit={handleSubmit}>
      <Grid container spacing={2} flex justifyContent={"center"} marginTop={1}>
        <Grid item xs={11} sm={8}>
          <TextField
            id="outlined-basic"
            name="nombre"
            placeholder="Nombre"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            error={errors.nombre && true}
            helperText={errors.nombre}
          />{" "}
        </Grid>
        <Grid item xs={11} sm={8}>
          <TextField
            id="outlined-basic"
            name="email"
            placeholder="Email"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            error={errors.email && true}
            helperText={errors.email}
          />{" "}
        </Grid>
        <Grid item xs={11} sm={8}>
          <TextField
            id="outlined-basic"
            name="telefono"
            placeholder="Teléfono"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            error={errors.telefono && true}
            helperText={errors.telefono}
          />{" "}
        </Grid>
      </Grid>
      <Grid>
        <Button type="submit" variant="contained" size="small" color="success">
          {" "}
          Comprar
        </Button>
      </Grid>
    </form>
  );
};
