import { Button, FormControl, FormLabel, List, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Title from "../components/Title";
import { useState } from "react";
import axios from "axios";

const allComents = [
    {
        name: 'Fernando Pessoa',
        comment: 'Amo como ama o amor.\nNão conheço nenhuma outra razão para amar senão amar.\nQue queres que te diga, além de que te amo, se o que quero dizer-te é que te amo?',
        date: new Date(),
    }, {
        name: 'Laury Clark Bueno',
        comment: 'Incrível como 40 segundos de vídeo conseguem mostrar tanto do que vocês são juntos.\n\nEspontâneos como um riso e precisos como uma dança.\n\nA vida é longa e o mundo é de vocês.',
        date: new Date(),
   
    }, {
        name: 'Tania',
        comment: 'Parabens aos noivos',
        date: new Date(),
    }, {
        name: 'Vinicius de moraes',
        comment: 'Caros noivos,\nParabéns pelo enlace iminente. Que a vida de vocês seja um eterno poema de amor.\nCom carinho,\nVinicius de Moraes',
        date: new Date(),
    },
]

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
            <List>
                {allComents
                    .sort((a, b) => a.date - b.date)
                    .map(comment => 
                        <Comment name={comment.name} date={comment.date} comment={comment.comment} key={comment.date+comment.name}/>
                    )}
            </List>
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

function Comment({ name, comment, date }) {
    const day = (date.getDate()+'').length === 1 ? '0'+date.getDate() : date.getDate()
    const month = (date.getMonth()+'').length === 1 ? '0'+date.getMonth(): date.getMonth()
    const year = date.getFullYear()

    return (
        <div style={{marginBottom: '2%'}}>
            <Typography style={{display: 'inline-block'}} variant="h6" component="div">
                {name+' '}
            </Typography>
            <Typography style={{display: 'inline-block', marginLeft: '5px'}} sx={{ mb: 1 }} color="text.secondary">
                {`${day}/${month}/${year}`}
            </Typography>
            <Typography variant="body2">
                {comment}
            </Typography>
        </div>
    )

}