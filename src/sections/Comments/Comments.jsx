import { Avatar, Button, Card, CardContent, CardHeader, FormControl, FormLabel, List, Paper, Snackbar, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

import './Comments.css'
import FadeInText from '../../components/FadeInText';
import FadeInImage from '../../components/FadeInImage';
import oldComments from './comments.json'

export default function Comments() {
    const [allComents, setAllComents] = useState(oldComments)

    function handleSubmit(name, message) {
        axios.post('https://couve.laury.dev/v2/entry/LucasDelboni/wedding/main/comments', {
            fields: {
                name: name,
                message: message,
            }
        })
        setAllComents(allComents.concat([{ name, message, date: (new Date() / 1000) }]))
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
                            date={new Date(comment.date * 1000)}
                            message={comment.message}
                        />
                    )}
            </List>
            <CommentForm sendNewComment={handleSubmit}></CommentForm>
        </>
    )
}

const SmallAvatar = styled(Avatar)(() => ({
    width: 35,
    height: 35,
}));

function CommentForm({ sendNewComment }) {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [alertIsOpen, setAlertIsOpen] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setAlertIsOpen(false);
        }, 3000);
    }, [alertIsOpen]);

    function submit(event) {
        event.preventDefault()
        sendNewComment(name, message)
        setAlertIsOpen(true)
        setMessage('')
        setName('')
    }

    function isValidName() {
        return name.length > 2
    }

    function isValidMessge() {
        return message.length > 5
    }

    function isValidComment() {
        return isValidName() && isValidMessge()
    }

    return (
        <>
            <Paper className="form-comments" elevation={3}>
                <FadeInText component="h4" className="form-comments__title">
                    Deixe seu recado
                </FadeInText>
                <form autoComplete="off" onSubmit={submit}>
                    <FormControl fullWidth>
                        <FormLabel className="form-comments__label">Nome</FormLabel>
                        <TextField
                            required
                            error={name !== '' && !isValidName()}
                            id="name"
                            label="Nome"
                            value={name}
                            minLe
                            onChange={e => setName(e.target.value)}
                            sx={{ marginBottom: '2rem' }}
                            inputProps={{ minLength: 3 }}
                        />
                        <FormLabel className="form-comments__label">Comentário</FormLabel>
                        <TextField
                            required
                            error={message !== '' && !isValidMessge()}
                            id="message"
                            label="Comentário!"
                            multiline
                            rows={4}
                            value={message}
                            sx={{ marginBottom: '2rem' }}
                            onChange={e => setMessage(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            endIcon={<SendIcon />}
                            onClick={submit}
                            sx={{ color: 'white' }}
                            disabled={!isValidComment()}
                        >
                            Enviar
                        </Button>
                    </FormControl>
                </form>
            </Paper>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={alertIsOpen}
                message="Comentário enviado com sucesso!"
            />
        </>
    )
}

function Comment({ name, message, date }) {
    const day = (date.getDate() + '').length === 1 ? '0' + date.getDate() : date.getDate()
    const month = (date.getMonth() + '').length === 1 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    const year = date.getFullYear()

    return (
        <Card className="comment" elevation={3}>
            <FadeInText component="h3" className="comment__date">
                {`${day}/${month}/${year}`}
            </FadeInText>
            <CardHeader className="comment__text-container"
                avatar={<SmallAvatar alt={name}>{name.substr(0, 1)}</SmallAvatar>}
                title={name}
            />
            <CardContent>
                <FadeInText speed="fast" className="comment__text">
                    {message}
                </FadeInText>
            </CardContent>
        </Card>
    )
}