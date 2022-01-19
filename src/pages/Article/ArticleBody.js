import React from 'react';
import parse from "html-react-parser";
import sanitizeHtml from "sanitize-html";
import {sanitizeHtmlOptions} from "../../data/landing_variables";

const ArticleBody = ({item}) => {
    return (
        <div className={"article__block"}>
            <h3 className={"article__body__title"}
                id={`${item.header ? item.header.toLowerCase() : ""}`.trim()}>{item.header}</h3>
            {item.text_before_picture ? <div className="article__body__description">
                {/*{parse(item.text_before_picture)}*/}
                {parse(sanitizeHtml(item.text_before_picture, sanitizeHtmlOptions))}
            </div> : null}

            {item.multiple_pictures.length > 0 ? <div
                className={`article__body__image__container ${item.display_picture_one_in_line ? `one_pic` :
                    item.display_picture_two_in_line ? `two_pic` :
                        item.display_picture_three_in_line ? `three_pic` : ""}`}
            >
                {item.multiple_pictures.map((i, index) => <img key={index} src={i.url} alt={i.alternativeText}
                                                               className="article__images"/>)}
            </div> : null}

            {item.text_after_picture ? <div className="article__body__description">
                {parse(sanitizeHtml(item.text_after_picture, sanitizeHtmlOptions))}
            </div> : null}

            {item.attention_block ? <div className="article__body__attention__wrapper">
                <div className="article__body__attention__block">
                    <div className="attention__block__text">
                        <img src={item.attention_block.alarm_picture.url}
                             alt={item.attention_block.alarm_picture.alternativeText}
                             className="attention__block__image"/>
                        <div className="attention__block__description">{parse(sanitizeHtml(item.attention_block.alarm_text, sanitizeHtmlOptions))}</div>
                    </div>
                </div>
            </div> : null}
        </div>
    );
};

export default ArticleBody;

