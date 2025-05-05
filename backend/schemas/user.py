from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    nom: str
    email: EmailStr

class UserOut(UserCreate):
    id: int

    class Config:
        from_attributes = True
