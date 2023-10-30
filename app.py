from flask import Flask, redirect, render_template, request, session, url_for, jsonify, flash
from flask_session import Session
import identity.web

app = Flask(__name__)


@app.route('/')
def method_name():
    return "Hello Abhinav"
