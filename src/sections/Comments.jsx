import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Title from "../components/Title";
import { useState } from "react";
import axios from "axios";

export default function Comments() {
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')


    function handleSubmit (event) {
        event.preventDefault()
        axios.post('/comment', {
            'fields[name]': name,
            'fields[comment]': comment,
            'fields[date]': new Date(),
        })
    }

    return (
        <>
            <Title title="Comentários"/>
            <div style={{display: 'block', textAlign: 'center'}}>
                <img
                    src='casal.png'
                    srcSet='casal.png'
                    alt='Desenho que a Adrina fez do casal'
                    loading="lazy"
                />
            </div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <FormLabel>Nome</FormLabel>
                    <TextField
                        required
                        id="name"
                        label="Fernando Pessoa"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <FormLabel>Comentário</FormLabel>
                    <TextField
                        required
                        id="comment"
                        label="Parabéns!"
                        multiline
                        rows={4}
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                    <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
                        Enviar
                    </Button>
                </FormControl>
            </form>
        </>
    )
}