import React, { Component } from 'react';
import * as Style from './style';
import { Link } from 'react-router-dom'

class GetDetailReview extends Component {
    render(){
        return(
            <Style.Footer>
                <Link to="/review">
                    후기 보러가기
                </Link>
            </Style.Footer>
        )
    }
}

const EstimateCard = (props) => {
    if(props.sheets.length === 0){
        return (
            <Style.ListWrapper>
                <Style.Card>
                    <Style.Empty>Empty</Style.Empty>
                </Style.Card>
            </Style.ListWrapper>
        )
    }
    const Sheets = props.sheets.map( (sheet, index) => (
        <Style.Card key={index}>
            <Style.Header>
                <img src={sheet.thumb_uri} alt="estimate" />
            </Style.Header>
            <Style.Body>
                <p>{sheet.title}</p>
                <p> {sheet.com_name} | {sheet.com_loc}</p>
                <p>{sheet.summary}</p>
            </Style.Body>
            <GetDetailReview/>
        </Style.Card>
    ));
    return(
        <Style.ListWrapper>
            {Sheets}
        </Style.ListWrapper>
    )
}

export default EstimateCard
