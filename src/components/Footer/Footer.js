import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer-display'>
            <h3>Q1: What is Semantic tag?
            </h3>
            <p>Answer: In HTML there are two types of tag, which is semantic and non-semantic. Here semantic elements or tag has a meaning, or we can said that semantic tags is something which carry's meaning. If we see some semantic tag then it will be clear that what meaning it holds. From, Table, Article, Blog, Section, Footer etc all these are semantic tag. Now for developer it's very easy to learn this tags, as well as to memorize when to use this tags and also in which area these tag should apply.That's why it's called semantic tag.
            </p>
            <h3>Q2: What is Context API?</h3>
            <p>Answer: We know that in react to send props, there is no alternate, we have to goes through sequentially upper to lower and have to pass every branch, which is also called props drilling. Now Context API is something which solve this issue, with context api we can share props across the entire app. Basically it's produce global variables,which share props to grandparent to child to parent, and so on</p>
        </div>
    );
};

export default Footer;