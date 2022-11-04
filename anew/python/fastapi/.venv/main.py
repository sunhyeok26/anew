from fastapi import fastapi
app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello":"World"}

if__name__=='__main__':
uvicorn.run(app, host="0.0.0.0", port=8000)

## Makefile
run:
        uvicorn main:app --host 0.0.0.0 --port 8000 --reload
