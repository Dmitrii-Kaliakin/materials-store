import { Typography, Toolbar, Grid, Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./styles.css";

export function Footer() {
  return (
    <footer className="footer-container">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <div className="footer-section">
              <Typography variant="h6" component="h2">
                Контакты
              </Typography>
              <Typography>Телефон: +79128564800</Typography>
              <Typography>Email: gserg1@ya.ru</Typography>
            </div>
          </Grid>
          <Grid item>
            <div className="footer-section">
              <Typography variant="body2" component="p">
                Написать в мессенджер:
              </Typography>
              <div className="social-icon-container">
                <a
                  className="social-icon-link"
                  href="https://api.whatsapp.com/send?phone=79128564800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    sx={{
                      bgcolor: "#fff",
                      p: 1,
                      borderRadius: "50%",
                    }}
                  >
                    <WhatsAppIcon style={{ color: "#25D366" }} />
                  </Box>
                </a>
                <a
                  className="social-icon-link"
                  href="https://t.me/Fiservic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    sx={{
                      bgcolor: "#fff",
                      p: 1,
                      borderRadius: "50%",
                    }}
                  >
                    <TelegramIcon style={{ color: "#0088CC" }} />
                  </Box>
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} Все права защищены. Строительный
        магазин
      </Typography>
    </footer>
  );
}
