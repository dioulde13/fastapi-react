from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import user_route
from database import Base, engine

# Création des tables dans la base de données
Base.metadata.create_all(bind=engine)

# Création de l'application FastAPI
app = FastAPI()

# Configuration du CORS
origins = [
    "http://localhost:3000",  # origine du frontend React
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,          # autorise cette origine
    allow_credentials=True,
    allow_methods=["*"],            # autorise toutes les méthodes HTTP
    allow_headers=["*"],            # autorise tous les headers
)

# Inclusion des routes
app.include_router(user_route.router)
