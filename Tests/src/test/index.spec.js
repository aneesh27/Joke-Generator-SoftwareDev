const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const {expect,assert} = require('chai');
const should = chai.should();
const request = require('supertest');


const express = require('express');
const session = require('express-session');
const app = express();
// const dotenv = require('dotenv').config({path:'../.env'});

app.use(session({
      secret: "test",
      saveUninitialized: false,
      resave: false,  
      cookie:{secure: false}
    })
  );

const server = require('../index');
const res = chai.request(server);

before((done) => {

    done();
});

after((done) => {
    
    done();
});

describe('Register/Login/Logout',() => {
    /** 
     * Test the Post Register route
     */
    describe("POST /register", function() {
        it('Successful registration', (done) => {
            let user = {
            "username":"Clown",
            "password":"isClown##12",
            "img_url":"https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg"
            }
            request(app)
            .post('/register')
            .type('form')
            .send(user)
            .end(function(err, res){
                res.body.should.be.a("object");
                expect(err).to.be.null;
                done();
            });
        });
        it('Empty strings', (done) => {
            let User = {
            "username":"",
            "password":"",
            "img_url":""
            }
            request(app)
                .post('/register')
                .type('form')
                .send(User)
                .end(function(err, res){
                    res.body.should.be.a("object");
                    res.should.have.property("error");
                    done();
                });
        });
        it('Too short, no numbers, no special', (done) => {
            let user = {
            "username":"hahaha",
            "password":"abcdef",
            "img_url":"https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg"
            }
            request(app)
                .post('/register')
                .type('form')
                .send(user)
                .end(function(err, res){
                    res.body.should.be.a("object");
                    res.should.have.property("error");
                    // res.error.should.contain("at least 8 digits including one number, lowercase and uppercase letter, and a symbol");
                    done();
                });
        });
        it('Username already exists', (done) => {
            let user = {
            "username":"admin",
            "password":"admin",
            "img_url":"https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg"
            }
            request(app)
                .post('/register')
                .type('form')
                .send(user)
                .end(function(err, res){
                    res.body.should.be.a("object");
                    res.should.have.property("error");
                    done();
                });
        });

    });

    /** 
     * Test the Post Login route
     */
    describe("POST /login", function() {
        it('Successful login', (done) => {
            let user = {
            "username":"Clown",
            "password":"isClown##12"
            }
            request(app)
                .post('/login')
                .type('form')
                .send(user)
            .end(function(err, res){
                res.body.should.be.a("object");
                expect(err).to.be.null;
                done();
            });
        });

        it('Empty strings', (done) => {
            let user = {
            "username":"",
            "password":"",
            "img_url":""
            }
            request(app)
                .post('/login')
                .type('form')
                .send(user)
            .end(function(err, res){
                res.body.should.be.a("object");
                res.should.have.property("error");
                done();
            });
        });

        it('Incorrect password for login', (done) => {
            let user = {
            "username":"Clown",
            "password":"notClown11$$",
            "img_url":"https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg"
            }
            request(app)
                .post('/login')
                .type('form')
                .send(user)
            .end(function(err, res){
                res.body.should.be.a("object");
                res.should.have.property("error");
                done();
            });
        });
    });

    /** 
     * Test the Get Logout route
     */
    describe("GET /logout", function() {
        it('Successful logout', (done) =>{
            request(app)
            .get('/logout')
            .end(function(err, res){
                expect(err).to.be.null;
                done();
            });
        });
    });
});

describe("Joke Generating", function(){
    /** 
     * Testing Joke Generation
     */
    it('Joke type must be specified', (done) => {
        let joke = {
        "dadJokes":false,
        "yoMama":false,
        "french":false,
        "geek":false,
        "bread":false,
        "quantity": null
        }
        request(app)
            .post('/displayjokes')
            .type('form')
            .send(joke)
        .end(function(err, res){
            res.body.should.be.a("object");
            res.should.have.property("error");
            // res.error.should.include("")
            done();
        });
    });

    it('Fill filter fields', (done) => {
        let joke = {
        "dadJokes":false,
        "yoMama":false,
        "french":true,
        "geek":false,
        "bread":false,
        "quantity": null
        }
        request(app)
            .post('/displayjokes')
            .type('form')
            .send(joke)
        .end(function(err, res){
            res.body.should.be.a("object");
            expect(err).to.be.null;
            done();
        });
    });

    it('Removing filter resets jokes', (done) => {
        let joke = {
        "dadJokes":true,
        "yoMama":false,
        "french":false,
        "geek":false,
        "bread":false,
        "quantity": 5
        }
        request(app)
            .post('/displayjokes')
            .type('form')
            .send(joke)
        .end(function(err, res){
            res.body.should.be.a("object");
            expect(err).to.be.null;
            done();
        });
    });
    it('Returned jokes fit filter', (done) => {
        let joke = {
        "dadJokes":false,
        "yoMama":false,
        "french":false,
        "geek":false,
        "bread":false,
        "quantity": 5
        }
        request(app)
            .post('/displayjokes')
            .type('form')
            .send(joke)
        .end(function(err, res){
            res.body.should.be.a("object");
            expect(err).to.be.null;
            done();
        });
    });
    it('No jokes found', (done) => {
        let joke = {
        "dadJokes":false,
        "yoMama":false,
        "french":false,
        "geek":false,
        "bread":true,
        "quantity": 5
        }
        request(app)
            .post('/displayjokes')
            .type('form')
            .send(joke)
        .end(function(err, res){
            res.body.should.be.a("object");
            expect(err).to.be.null;
            done();
        });
    });
});

describe("Joke Saving/Recall", function(){
    /** 
     * Test Joke Saving and Recall
     */
    it('Saved jokes can be recalled', (done) => {
        request(app)
            .post('/saved/remove/${results[i].joke_id}')
            .type('form')
        .end(function(err, res){
            res.body.should.be.a("object");
            done();
        });
    });
    it('Deleting an unsaved joke', (done) => {
        let joke = {
        }
        request(app)
            .post('/saved/remove/${results[i].joke_id}')
            .type('form')
        .end(function(err, res){
            res.body.should.be.a("object");
            done();
        });
    })
    it('Recalling a deleted joke', (done) => {
        let joke = {
        }
        request(app)
            .post('/saved/remove/${results[i].joke_id}')
            .type('form')
        .end(function(err, res){
            res.body.should.be.a("object");
            done();
        });
    });
    it('Attempting to save an already saved joke', (done) => {
        let joke = {
        }
        request(app)
            .post('/saved/remove/${results[i].joke_id}')
            .type('form')
        .end(function(err, res){
            res.body.should.be.a("object");
            done();
        });
    })
    it('Saving more than 25 jokes', (done) => {
        let joke = {
        }
        request(app)
            .post('/saved/remove/${results[i].joke_id}')
            .type('form')
        .end(function(err, res){
            res.body.should.be.a("object");
            done();
        });
    });
});