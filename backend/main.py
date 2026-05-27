from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS 설정 (Frontend에서의 접근 허용)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 방문자 수 저장 변수 (DB 없이 메모리에 저장, Pod 재시작 시 초기화됨)
visitor_count = 0

@app.get("/")
def read_root():
    return {"message": "TUSI Backend Service"}

@app.get("/api/visitors")
def get_visitors():
    global visitor_count
    visitor_count += 1
    return {"visitors": visitor_count}