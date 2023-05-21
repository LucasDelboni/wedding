import { Button, FormControl, FormLabel, List, Paper, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Title from "../components/Title";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Comments() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [allComents, setAllComents] = useState([])

    useEffect(() => {
        fetch('comments.json').then(commentsData => [
            commentsData.json().then(oldComments => 
                setAllComents(oldComments)
            )
        ])

    }, [])

    function handleSubmit (event) {
        event.preventDefault()
        axios.post('https://couve.laury.dev/v2/entry/LucasDelboni/wedding/main/comments', {
            fields: {
                name: name,
                message: message,
            }
        })
        setAllComents(allComents.concat([{name, message, date: new Date()}]))
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
                        <Comment name={comment.name} date={new Date(comment.date)} message={comment.message} key={comment.date+comment.name}/>
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
                        id="message"
                        label="Parabéns!"
                        multiline
                        rows={4}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
                        Enviar
                    </Button>
                </FormControl>
            </form>
        </>
    )
}

function Comment({ name, message, date }) {
    const day = (date.getDate()+'').length === 1 ? '0'+date.getDate() : date.getDate()
    const month = (date.getMonth()+'').length === 1 ? '0'+(date.getMonth()+1): date.getMonth()+1
    const year = date.getFullYear()

    return (
        <Paper elevation={3} style={{marginBottom: '1%'}}>
            <div style={{margin: '1%'}}>
                <Typography style={{display: 'inline-block'}} variant="h6" component="div">
                    {name}
                </Typography>
                <Typography style={{display: 'inline-block', marginLeft: '5px'}} sx={{ mb: 1 }} color="text.secondary">
                    {`${day}/${month}/${year}`}
                </Typography>
            </div>
            <div style={{marginLeft: '2%', marginRight: '2%'}}>
                <Typography variant="body2" style={{whiteSpace: 'pre-wrap'}}>
                    {message}
                </Typography>
            </div>
        </Paper>
    )
}