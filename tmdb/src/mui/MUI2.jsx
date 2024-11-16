import Button from '@mui/material/Button';

export default function MUI2() {
   return (
      <div>
         <Button
            style={{
               backgroundColor: '#1976d2',
               color: 'white',
               padding: 16,
            }}
         >
            버튼
         </Button>
         <Button
            sx={{
               backgroundColor: 'secondary.main',
               color: 'white',
               padding: '16px',
               '&:hover': {
                  backgroundColor: 'red',
               },
            }}
         >
            버튼2
         </Button>
         <Button variant="outlined">버튼3</Button>
      </div>
   );
}
