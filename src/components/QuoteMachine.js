import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesome, FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const QuoteMachine = (props) => (
  <Card>
    <CardContent>
      {
        props.selectedQuote ?
        (
          <Typography>
            {props.selectedQuote.quote} - {props.selectedQuote.author}
          </Typography>
        ) : null
      }
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="secondary" size="small" onClick={props.assignNewQuoteIndex}>Next Quote</Button>
        <IconButton
          target="_blank"
          href={`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}&hashtags=sdpr90`}
        >
          <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
        </IconButton>
      </CardActions>
  </Card>
);

export default QuoteMachine
