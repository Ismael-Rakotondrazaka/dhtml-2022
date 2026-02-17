FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built site into nginx
COPY site/ /usr/share/nginx/html/

# Optional: ensure proper permissions
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80
