import React from 'react';
import useTitle from '../../Hook/useTitle';
const Blog = () => {
    useTitle('Blog');
    return (
        <div className='container mx-auto text-left '>
            <h1 className='font-extrabold text-4xl text-center mb-8'>SOME QUESTION AND ANSWER</h1>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Q1. Difference between SQL and NoSQL?
                </div>
                <div className="collapse-content">
                    <p><img src="https://miro.medium.com/max/1400/1*jjLQMXJA3ZlMxE1xjVkNkQ.png" alt=""  /> </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Q2.What is  JWT and How does it work?
                </div>
                <div className="collapse-content">
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.<br />
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. <br/>

A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Q3. What is the difference between simpleJS and NodeJs?
                </div>
                <div className="collapse-content">
                    <p><img src="https://www.atliq.com/wp-content/uploads/2022/06/Know-the-difference-between-javascript-and-node-js-4-1024x576.jpg" alt="" /> </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Q4. How does NodeJs handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br/>
If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                        </p>
                </div>
            </div>
        </div>
    );

};

export default Blog;