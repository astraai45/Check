import React, { useState } from 'react';
import { Filter, Star, ArrowRight, Zap, Brain, Sparkles, Database } from 'lucide-react';
import { Project } from '../types/Project';

interface ProjectsShowcaseProps {
  onProjectClick: (project: Project) => void;
}

const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onProjectClick }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: 'all', name: 'All Projects', icon: Filter },
    { id: 'real-time', name: 'Real-Time Systems', icon: Zap },
    { id: 'generative-ai', name: 'Generative AI', icon: Sparkles },
    { id: 'deep-learning', name: 'Deep Learning', icon: Database },
    { id: 'machine-learning', name: 'Machine Learning', icon: Brain },
  ];

  const projects: Project[] = [
    // Depression-Bot-using-RAG
    {
      id: '1',
      title: 'Depression-Bot-using-RAG',
      descriptor: 'Geriatric Depression Chatbot',
      category: 'generative-ai',
      industry: 'Healthcare',
      thumbnail: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: ['https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800'],
      description: "A chatbot designed to assist elderly individuals experiencing depression, loneliness, or emotional challenges. Leverages advanced NLP, Langchain, Twilio, and more to offer compassionate, context-aware responses.",
      challenge: "Elderly users often face emotional challenges and need empathetic, accessible support that can understand voice, text, and multiple languages.",
      solution: "Built a multi-modal chatbot with voice/text input, PDF upload, multi-language support, and negative sentiment detection with Twilio alerts for relatives.",
      technologies: ['Streamlit', 'Langchain', 'Ollama', 'Chroma', 'Twilio', 'PyPDF2', 'PDFPlumber', 'Deep Translator', 'SpeechRecognition', 'Ragas'],
      demoLink: 'https://www.youtube.com/watch?v=OnRBqg93EiM'
    },
    // Intelligent-Fall-Detection-System
    {
      id: '2',
      title: 'Intelligent-Fall-Detection-System',
      descriptor: 'Fall Detection and Emergency Alert System',
      category: 'deep-learning',
      industry: 'Healthcare',
      thumbnail: 'https://i.postimg.cc/NfBVq1Y5/Fall-Thumbnail.jpg',
      gallery: ['https://i.postimg.cc/NfBVq1Y5/Fall-Thumbnail.jpg'],
      description: "This project combines computer vision and machine learning to create a safety solution that detects falls in real-time and sends emergency alerts to caregivers.",
      challenge: "Accidental falls, especially among the elderly, can result in serious injuries or fatalities. Detecting such events quickly is crucial for timely medical intervention.",
      solution: "Uses YOLOv8 for real-time fall detection, integrated with face recognition (DeepFace), Twilio API for emergency SMS alerts, and a Streamlit-based admin dashboard for profile management and alerts.",
      technologies: ['YOLOv8', 'OpenCV', 'DeepFace', 'Streamlit', 'Python', 'Twilio API', 'TensorFlow', 'scikit-learn'],
      demoLink: 'https://youtu.be/6ox9cFLjzSE'
    },
    // Smart-Farming-Web-App-Price-Prediction-AI-Chatbot
    {
      id: '3',
      title: 'Smart-Farming-Web-App-Price-Prediction-AI-Chatbot',
      descriptor: 'AI-Driven Agricultural Web Application',
      category: 'real-time',
      industry: 'Agriculture',
      thumbnail: 'https://i.postimg.cc/MK99CNdF/Smart-farming.jpg',
      gallery: ['https://i.postimg.cc/MK99CNdF/Smart-farming.jpg'],
      description: "A full-stack AI-powered farming web application that offers crop price prediction using ML and an AI chatbot assistant to support farmers with real-time decisions.",
      challenge: "Farmers often lack real-time insights into market prices and timely support for their agricultural queries, resulting in economic losses and inefficiencies.",
      solution: "Implemented a Flask-based backend with REST APIs, a React.js frontend, and a Random Forest ML model for price prediction using crop and market data. Integrated TinyLlama via Ollama for an interactive AI chatbot. Built a secure, responsive, and scalable solution with CI/CD pipeline.",
      technologies: ['Flask', 'React.js', 'Tailwind CSS', 'scikit-learn', 'Ollama (TinyLlama)', 'Python', 'CI/CD'],
      demoLink: 'https://youtu.be/2KSEIYGHyjw'
    },
    // LungAI-Diagnosis-Assistant
    {
      id: '4',
      title: 'LungAI-Diagnosis-Assistant',
      descriptor: 'AI-Powered Lung X-ray Diagnosis App',
      category: 'deep-learning',
      industry: 'Healthcare',
      thumbnail: 'https://i.postimg.cc/zXQnSrd8/lung-ass.jpg',
      gallery: ['https://i.postimg.cc/zXQnSrd8/lung-ass.jpg'],
      description: 'An AI-powered web application that analyzes lung X-ray images to diagnose conditions such as Lung Opacity and Viral Pneumonia with high accuracy and provides AI-generated explanations.',
      challenge: 'Manual analysis of lung X-rays is time-consuming and prone to human error. Non-specialists find it difficult to interpret medical images accurately.',
      solution: 'Developed a deep learning-based system using CNN models to predict lung conditions from X-ray images. Integrated AI-generated explanations for patient-friendly insights and built a simple Streamlit UI for ease of use.',
      technologies: ['TensorFlow', 'OpenCV', 'CNN', 'Streamlit', 'Python'],
      demoLink: 'https://youtu.be/nWul9A1V8zE'
    },
    // Interactive Voice Assistant travel agent
    {
      id: '5',
      title: 'Interactive Voice Assistant travel agent',
      descriptor: 'Voice Recognition, Translation & AI-Powered Response App',
      category: 'generative-ai',
      industry: 'Communication',
      thumbnail: 'https://i.postimg.cc/QCXRb5d9/image.png',
      gallery: ['https://i.postimg.cc/QCXRb5d9/image.png'],
      description: 'This innovative app converts spoken queries into text, uses an AI chatbot (TinyLlama) for responses, translates answers into any language, and delivers them back via text-to-speech—all in real-time.',
      challenge: 'Bridging communication gaps across languages and making AI interactions more natural and accessible through voice.',
      solution: 'A full-stack app using Flask for voice recognition, language translation, and text-to-speech, with a React frontend and integrated TinyLlama chatbot for real-time answers and natural voice feedback.',
      technologies: ['Python', 'Flask', 'React', 'Google Speech Recognition', 'Google Translate', 'Text-to-Speech', 'TinyLlama'],
      demoLink: 'https://youtu.be/EepXvKfp7Ow'
    },
    // AI-Powered-Tamil-Nadu-Tourism-Assistant
    {
      id: '6',
      title: 'AI-Powered-Tamil-Nadu-Tourism-Assistant',
      descriptor: 'Interactive Cultural Tourism Web App with AI Features',
      category: 'fullstack-ai',
      industry: 'Tourism',
      thumbnail: 'https://i.postimg.cc/jqcVj8Mz/image.png',
      gallery: ['https://i.postimg.cc/jqcVj8Mz/image.png'],
      description: 'A web application that combines Tamil Nadu’s cultural richness with AI-driven features like an interactive heritage map, multilingual chatbot, real-time translation, and voice interface to assist global tourists.',
      challenge: 'Tourists often struggle with limited access to historical information, language barriers, and navigation while exploring cultural heritage sites.',
      solution: 'Developed a React + Flask-based web app with Ollama’s TinyLlama AI, speech recognition, translation, and text-to-speech to deliver multilingual, voice-interactive assistance for Tamil Nadu\'s monuments and history.',
      technologies: ['React.js', 'Flask', 'Python', 'Ollama AI', 'Google Translate API', 'SpeechRecognition', 'gTTS', 'Pygame', 'React-Bootstrap'],
      demoLink: 'https://youtu.be/X0Rw_n1MgSk'
    },
    // Risk-Prediction-and-PDF-Processing-App
    {
      id: '7',
      title: 'Risk-Prediction-and-PDF-Processing-App',
      descriptor: 'AI-Powered Flask API for Risk Prediction and Document Automation',
      category: 'machine-learning',
      industry: 'HealthTech',
      thumbnail: 'https://i.postimg.cc/dtVbZ8fg/image.png',
      gallery: ['https://i.postimg.cc/dtVbZ8fg/image.png'],
      description: 'A robust web app and Flask-based API that handles health risk prediction, image uploads, Excel storage, and PDF text extraction using ML and NLP pipelines powered by LangChain and Llama2.',
      challenge: 'Automating complex workflows like risk prediction and document analysis typically requires multiple tools, which can be inefficient for developers and users.',
      solution: 'Built an integrated solution using Flask, OpenCV, Pandas, and PyPDF2 to handle ML-based predictions, secure image/file uploads, and document-based Q&A with LangChain and Ollama’s Llama2 model.',
      technologies: ['Flask', 'Pandas', 'OpenCV', 'PyPDF2', 'LangChain', 'Ollama', 'Llama2', 'Pickle', 'Flask-CORS', 'React', 'Werkzeug'],
      demoLink: 'https://youtu.be/ny8u8F3cuak'
    },
    // SignWave-AI-ASL-Translator
    {
      id: '8',
      title: 'SignWave-AI-ASL-Translator',
      descriptor: 'AI-Powered Real-Time Speech-to-Sign Language Translator',
      category: 'real-time',
      industry: 'Accessibility',
      thumbnail: 'https://i.postimg.cc/W1DxXsTn/image.png',
      gallery: ['https://i.postimg.cc/W1DxXsTn/image.png'],
      description: 'SignWave bridges the communication gap for the deaf community by converting speech into real-time 3D sign language animations using AI and gesture mapping technologies.',
      challenge: 'Communication barriers for the deaf and hard-of-hearing remain a major issue, especially in spontaneous spoken conversations or public content without subtitles.',
      solution: 'Built a Flask-based AI solution that transcribes audio using OpenAI Whisper, then maps text into ASL gestures using MediaPipe and Three.js, allowing both education and real-time sign language translation.',
      technologies: ['Flask', 'OpenAI Whisper', 'MediaPipe', 'NumPy', 'Three.js', 'PyTorch', 'ffmpeg', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
      demoLink: 'https://youtu.be/-FfMy5CDpMc'
    },
    // Blood Group Classification Using Fingerprint Images
    {
      id: '9',
      title: 'Blood Group Classification Using Fingerprint Images',
      descriptor: 'AI-Powered Deep Learning Model for Blood Group Prediction from Fingerprints',
      category: 'deep-learning',
      industry: 'Biometrics',
      thumbnail: 'https://i.postimg.cc/908NYnkK/image.png',
      gallery: ['https://i.postimg.cc/908NYnkK/image.png'],
      description: 'This project uses a deep learning CNN model to classify blood groups based on fingerprint images, integrated into a Streamlit web app for real-time prediction and easy accessibility.',
      challenge: 'Conventional blood testing methods require invasive procedures; this project explores a non-invasive, image-based classification alternative using fingerprints.',
      solution: 'Developed an AI system that uses TensorFlow to classify fingerprint images into 8 blood group classes (A+, A-, B+, B-, AB+, AB-, O+, O-), with automatic preprocessing and instant prediction via Streamlit.',
      technologies: ['TensorFlow', 'Keras', 'CNN', 'Streamlit', 'OpenCV', 'NumPy', 'Python', 'PIL', 'Image Preprocessing'],
      demoLink: 'https://youtu.be/UMmAAx3WGKU'
    },
    // AI-Powered Resume Screening System
    {
      id: '10',
      title: 'AI-Powered Resume Screening System',
      descriptor: 'Intelligent AI-Based Job Matching Platform for Efficient Hiring',
      category: 'machine-learning',
      industry: 'Human Resources',
      thumbnail: 'https://i.postimg.cc/jjHgF59z/image.png',
      gallery: ['https://i.postimg.cc/jjHgF59z/image.png'],
      description: 'This platform uses Ollama’s TinyLlama AI model to match resumes with job descriptions, automating resume parsing, matching, and cleanup with a seamless React and Flask-based interface.',
      challenge: 'Manually reviewing resumes is time-consuming and inefficient; traditional systems lack smart, real-time AI evaluation.',
      solution: 'Built an end-to-end system that processes PDFs, extracts data, and intelligently ranks candidates based on job relevance using TinyLlama AI, all through a user-friendly web interface.',
      technologies: ['Flask', 'React.js', 'Ollama TinyLlama', 'PyPDF2', 'Axios', 'Flask-CORS', 'Python'],
      demoLink: 'https://youtu.be/U2P938WkI9g'
    },
    // Audio Speech to Sign Language Converter
    {
      id: '11',
      title: 'Audio Speech to Sign Language Converter',
      descriptor: 'Live Speech to Indian Sign Language Animation',
      category: 'real-time',
      industry: 'Accessibility',
      thumbnail: 'https://i.postimg.cc/R0LdTY6d/image.png',
      gallery: ['https://i.postimg.cc/R0LdTY6d/image.png'],
      description: 'A real-time web application that transforms live audio into Indian Sign Language (ISL) animations using speech recognition, natural language processing, and 3D gesture rendering.',
      challenge: 'Communication barriers between hearing and deaf communities due to lack of real-time sign language interpretation.',
      solution: 'Developed a system that converts speech and text to ISL animations using Web Speech API, NLTK, and Blender 3D with a Django backend and secure user authentication.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Django', 'Web Speech API', 'NLTK', 'Blender 3D'],
      demoLink: 'https://youtu.be/86E-JcdwPE4'
    },
    // Face Mask & DeepFake Detection using Deep Learning
    {
      id: '12',
      title: 'Face Mask & DeepFake Detection using Deep Learning',
      descriptor: 'Real-time Detection System for Face Masks and DeepFakes',
      category: 'deep-learning',
      industry: 'Security',
      thumbnail: 'https://i.postimg.cc/B6hCr1C1/image.png',
      gallery: ['https://i.postimg.cc/B6hCr1C1/image.png'],
      description: 'An AI-powered web application that combines face mask detection and deepfake video analysis with user authentication using Streamlit, OpenCV, and Keras',
      challenge: 'Growing need for real-time identification of face mask usage and detection of synthetic media (deepfakes) for public health and digital security.',
      solution: 'Integrated two deep learning models for image and video classification with secure login features, allowing users to analyze inputs via a clean Streamlit UI.',
      technologies: ['Python', 'OpenCV', 'Keras', 'TensorFlow', 'InceptionV3', 'Streamlit'],
      demoLink: 'https://youtu.be/cA3aJT84o_s'
    },
    // Online Payment Fraud Detection System
    {
      id: '13',
      title: 'Online Payment Fraud Detection System',
      descriptor: 'Real-Time Transaction Fraud Detection with Streamlit and KNN',
      category: 'machine-learning',
      industry: 'Fintech',
      thumbnail: 'https://i.postimg.cc/PfR4KYxg/image.png',
      gallery: ['https://i.postimg.cc/PfR4KYxg/image.png'],
      description: 'A secure web app that uses a K-Nearest Neighbors (KNN) model to predict fraudulent online transactions with real-time alerts and dynamic data visualizations.',
      challenge: 'Increasing volume of online transactions leading to higher risks of fraudulent payments, requiring accurate and real-time detection systems.',
      solution: 'Built an interactive Streamlit interface featuring secure authentication, real-time fraud classification, transaction analysis visuals, and audio alerts for high-risk transactions.',
      technologies: ['Python', 'Streamlit', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Pandas'],
      demoLink: 'https://youtu.be/AyHQ8tly50c'
    },
    // Bank Direct Marketing Prediction using AI | XGBoost Model with Streamlit
    {
      id: '14',
      title: 'Bank Direct Marketing Prediction using AI | XGBoost Model with Streamlit',
      descriptor: 'Predict customer subscription to term deposits with a secure and interactive Streamlit web app powered by the XGBoost algorithm.',
      category: 'machine-learning',
      industry: 'Marketing Analytics',
      thumbnail: 'https://i.postimg.cc/GpdJ9j7y/image.png',
      gallery: ['https://i.postimg.cc/GpdJ9j7y/image.png'],
      description: 'A smart web application that uses XGBoost to predict if a customer will subscribe to a bank’s term deposit, featuring real-time predictions, secure authentication, and visual insights.',
      challenge: 'Financial institutions face difficulty in identifying the right target customers, making it essential to use predictive analytics for marketing effectiveness.',
      solution: 'Built a user-friendly Streamlit app that performs secure login, accepts customer data input, processes it in real-time, and predicts subscription likelihood using a trained XGBoost model with rich data visualizations.',
      technologies: ['Python', 'XGBoost', 'Streamlit', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
      demoLink: 'https://youtu.be/3HB3bVEwTBE'
    },
    // Food Stale Detection with Deep Learning
    {
      id: '15',
      title: 'Food Stale Detection with Deep Learning',
      descriptor: 'A deep learning-powered web app that uses Streamlit and real-time camera input to determine the freshness of food items like apples and bananas through image classification.',
      category: 'deep-learning',
      industry: 'Food Safety',
      thumbnail: 'https://i.postimg.cc/N0D8XrSP/image.png',
      gallery: ['https://i.postimg.cc/N0D8XrSP/image.png'],
      description: 'A powerful deep learning-powered web app that uses Streamlit and real-time camera input to determine the freshness of food items like apples and bananas through image classification.',
      challenge: 'Manual identification of stale food is unreliable and time-consuming, especially in large-scale food industries and retail.',
      solution: 'Developed a deep learning model (via Teachable Machine & TensorFlow) integrated with a Streamlit app that allows users to either upload an image or use a live camera to instantly classify food items as fresh or stale.',
      technologies: ['TensorFlow', 'Keras', 'OpenCV', 'Streamlit', 'NumPy', 'PIL'],
      demoLink: 'https://youtu.be/COcu863N4Wk'
    },
    // Crime Prediction in Chicago
    {
      id: '16',
      title: 'Crime Prediction in Chicago',
      descriptor: 'Predict crime rates in Chicago using a Random Forest Regressor integrated into a user-friendly Streamlit web application.',
      category: 'machine-learning',
      industry: 'Public Safety',
      thumbnail: 'https://i.postimg.cc/gJrh6tvn/image.png',
      gallery: ['https://i.postimg.cc/gJrh6tvn/image.png'],
      description: 'A machine learning-powered web app that forecasts crime counts in Chicago based on user inputs like district, community area, and time frame using Random Forest Regression',
      challenge: 'Law enforcement agencies face difficulty in predicting crime patterns across locations and time periods, hindering preventive action and resource allocation.',
      solution: 'Designed a predictive system using crime data from Chicago, combined with feature engineering and a Random Forest model, deployed via Streamlit for intuitive forecasting of future crime incidents',
      technologies: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NumPy'],
      demoLink: 'https://youtu.be/5EsELUKG1cM'
    },
    // Hospital Management System | ReactJS
    {
      id: '17',
      title: 'Hospital Management System | ReactJS',
      descriptor: 'A modern ReactJS-based hospital management web app featuring multilingual AI chatbot support, role-based access, and emergency service coordination.',
      category: 'fullstack-ai',
      industry: 'Healthcare',
      thumbnail: 'https://i.postimg.cc/dQpXHLtx/image.png',
      gallery: ['https://i.postimg.cc/dQpXHLtx/image.png'],
      description: 'A comprehensive hospital management system that streamlines patient communication, emergency response, and admin coordination using AI, real-time search, and a multilingual interface.',
      challenge: 'Healthcare centers struggle with managing multilingual communication, patient search, emergency services, and role-based staff access efficiently.',
      solution: 'Built a responsive and multilingual ReactJS platform integrated with Firebase and Node.js, featuring an AI chatbot, secure login for various roles, an admin panel, and real-time patient and ambulance service management.',
      technologies: ['ReactJS', 'Firebase', 'Node.js', 'Context API', 'React Router', 'Tailwind CSS', 'Styled Components'],
      demoLink: 'https://youtu.be/Cfa_q3xOHhA'
    },
    // AI-Powered Medical Chatbot | LSTM + NLP
    {
      id: '18',
      title: 'AI-Powered Medical Chatbot | LSTM + NLP',
      descriptor: 'A deep learning-based multilingual medical chatbot that understands user queries through text/voice',
      category: 'generative-ai',
      industry: 'Healthcare',
      thumbnail: 'https://i.postimg.cc/1zv7pzjM/image.png',
      gallery: ['https://i.postimg.cc/1zv7pzjM/image.png'],
      description: 'An intelligent medical chatbot built with LSTM, NLP, and LLMs (like Llama 2 via Ollama) to provide multilingual diagnosis and dynamic health solutions with visual aid using GIFs.',
      challenge: 'Many users—especially in regional areas—lack access to reliable and language-inclusive medical guidance, limiting early diagnosis and timely intervention.',
      solution: 'Developed a multilingual chatbot using deep learning (LSTM) and large language models that supports English, Telugu, and Tamil, enabling users to interact via voice or text and receive relevant, visually supported medical responses.',
      technologies: ['LSTM', 'NLP', 'LLMs (Llama 2 via Ollama)', 'Flask/Streamlit', 'Speech Recognition', 'Text-to-Speech', 'GIF Generation'],
      demoLink: 'https://youtu.be/OnRBqg93EiM'
    },
    // Smart Farmer AI Assistant
    {
      id: '19',
      title: 'Smart Farmer AI Assistant',
      descriptor: 'AI-Powered Agricultural Assistant with Flask and Deep Learning',
      category: 'machine-learning',
      industry: 'Agriculture',
      thumbnail: 'https://i.postimg.cc/cCnDyB45/image.png',
      gallery: ['https://i.postimg.cc/cCnDyB45/image.png'],
      description: 'A Flask-based intelligent web app offering crop recommendation, fertilizer prediction, water level estimation, and leaf disease detection using machine learning and deep learning.',
      challenge: 'Farmers face challenges in optimizing crop yield, managing resources, and identifying plant diseases without expert assistance.',
      solution: 'Developed a smart AI solution using ML and CNN models deployed in a Flask web app to guide farmers on crop choices, fertilizer use, irrigation needs, and disease diagnosis.',
      technologies: ['Python', 'Flask', 'Random Forest', 'Decision Trees', 'TensorFlow', 'Keras', 'CNN', 'OpenCV'],
      demoLink: 'https://youtu.be/jANYn1GONQ8'
    },
    // AI-Powered Deep Face Detection System
    {
      id: '20',
      title: 'AI-Powered Deep Face Detection System',
      descriptor: 'Real-Time Face Recognition using MobileNet and LSTM in Streamlit',
      category: 'deep-learning',
      industry: 'Security',
      thumbnail: 'https://i.postimg.cc/QdXq035z/image.png',
      gallery: ['https://i.postimg.cc/QdXq035z/image.png'],
      description: 'A real-time AI system combining CNN (MobileNet) and RNN (LSTM) to detect and recognize faces with high accuracy through a user-friendly Streamlit web interface.',
      challenge: 'Traditional face recognition systems lack real-time efficiency, temporal consistency, and scalability in live environments.',
      solution: 'Designed an intelligent deep learning model with MobileNet for fast feature extraction and LSTM for sequence analysis, enabling accurate and real-time facial recognition in surveillance and authentication setups.',
      technologies: ['Python', 'MobileNet', 'LSTM', 'TensorFlow', 'Keras', 'OpenCV', 'Streamlit'],
      demoLink: 'https://youtu.be/3iybaE7sfBw'
    },
    // AI-Powered WhatsApp Chat Analysis
    {
      id: '21',
      title: 'AI-Powered WhatsApp Chat Analysis',
      descriptor: 'Sentiment Analysis, Chat Trends & Forecasting using Streamlit',
      category: 'machine-learning',
      industry: 'Analytics',
      thumbnail: 'https://i.postimg.cc/pdrJMJsY/image.png',
      gallery: ['https://i.postimg.cc/pdrJMJsY/image.png'],
      description: 'An AI-driven Streamlit app that analyzes WhatsApp chat data to reveal message trends, user activity, sentiments, and predicts future chat behavior with ARIMA.',
      challenge: 'Extracting meaningful insights from unstructured chat logs to understand communication patterns, emotional tones, and user engagement.',
      solution: 'Built a complete analytics pipeline featuring sentiment detection, forecasting with ARIMA, word clouds, and emoji sentiment breakdown, all wrapped in an interactive UI',
      technologies: ['Python', 'Streamlit', 'Pandas', 'NLTK', 'Seaborn', 'ARIMA', 'WordCloud', 'Emoji Analysis'],
      demoLink: 'https://youtu.be/T-xakxYGsr8'
    },
    // AI-Based Petition Management System
    {
      id: '22',
      title: 'AI-Based Petition Management System',
      descriptor: 'Grievance Redressal Automation using BERT and SVM',
      category: 'real-time',
      industry: 'Public Administration',
      thumbnail: 'https://i.postimg.cc/L4LBSX37/image.png',
      gallery: ['https://i.postimg.cc/L4LBSX37/image.png'],
      description: 'An intelligent petition processing system that uses NLP models like BERT and SVM to classify, prioritize, and route grievances for efficient and transparent redressal.',
      challenge: 'Manual petition handling is slow, error-prone, and lacks transparency, making it difficult to address public concerns promptly.',
      solution: 'Developed an AI solution that auto-classifies petitions by department, flags emergencies, detects repetitions, sends resolution reminders, and updates users in real-time.',
      technologies: ['Python', 'BERT', 'SVM', 'NLP', 'Scikit-learn', 'Transformers', 'Streamlit'],
      demoLink: 'https://youtu.be/jnAWjARNjyo'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of cutting-edge solutions across various industries and technologies
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer"
              // Removed onClick from card
            >
              {/* Project Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                
                {/* Removed Complexity Indicator */}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                    {project.industry}
                  </span>
                  {/* Removed Star Rating */}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4">{project.descriptor}</p>

                <div className="flex items-center justify-between">
                  <button
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                    onClick={() => onProjectClick(project)}
                  >
                    <span className="font-medium">View Case Study</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? 'Show Less' : 'View All'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsShowcase;