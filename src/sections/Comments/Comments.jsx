import { Box, Button, FormControl, FormLabel, List, Paper, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import axios from "axios";

import './Comments.css'
import FadeInText from '../../components/FadeInText';
import RevelingText from '../../components/RevelingText';
import FadeInImage from '../../components/FadeInImage';

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

    function handleSubmit(event) {
        event.preventDefault()
        axios.post('https://couve.laury.dev/v2/entry/LucasDelboni/wedding/main/comments', {
            fields: {
                name: name,
                message: message,
            }
        })
        setAllComents(allComents.concat([{ name, message, date: new Date() }]))
    }

    return (
        <>
            <Title title="Comentários" />
            <div style={{ display: 'block', textAlign: 'center' }}>
                <FadeInImage
                    className="comments__logo"
                    src='casal.png'
                    srcSet='casal.png'
                    alt='Desenho que a Adrina fez do casal'
                    loading="lazy"
                />
            </div>
            <List sx={{ marginBottom: "4rem" }}>
                {allComents
                    .sort((a, b) => a.date - b.date)
                    .map(comment =>
                        <Comment
                            key={comment.date + comment.name}
                            name={comment.name}
                            date={new Date(comment.date)}
                            message={comment.message}
                        />
                    )}
            </List>
            <Paper className="form-comments" elevation={3}>
                <FadeInText component="h3" className="form-comments__title">
                    Deixe seu recado
                </FadeInText>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <FormControl fullWidth>
                        <FormLabel className="form-comments__label">Nome</FormLabel>
                        <TextField
                            required
                            id="name"
                            label="Fernando Pessoa"
                            value={name}
                            minLe
                            onChange={e => setName(e.target.value)}
                            sx={{ marginBottom: '2rem' }}
                            inputProps={{ minLength: 3 }}
                        />
                        <FormLabel className="form-comments__label">Comentário</FormLabel>
                        <TextField
                            required
                            id="message"
                            label="Parabéns!"
                            multiline
                            rows={4}
                            value={message}
                            sx={{ marginBottom: '2rem' }}
                            onChange={e => setMessage(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            endIcon={<SendIcon />}
                            onClick={handleSubmit}
                            sx={{ color: 'white' }}
                        >
                            Enviar
                        </Button>
                    </FormControl>
                </form>
            </Paper>
        </>
    )
}

function Comment({ name, message, date }) {
    const day = (date.getDate() + '').length === 1 ? '0' + date.getDate() : date.getDate()
    const month = (date.getMonth() + '').length === 1 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    const year = date.getFullYear()

    return (
        <Paper className="comment" elevation={3}>
            <Box className="comment__title">
                <FadeInText component="h3" className="comment__author">
                    {name}
                </FadeInText>
                <FadeInText component="h3" className="comment__date">
                    {` - ${day}/${month}/${year}`}
                </FadeInText>
            </Box>
            <Box className="comment__text-container">
                <RevelingText className="comment__text" speed="fast">
                    {message}
                </RevelingText>
            </Box>
        </Paper>
    )
}