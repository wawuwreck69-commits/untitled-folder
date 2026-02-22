import re

def process_svg(input_file, output_file):
    with open(input_file, 'r') as f:
        content = f.read()

    # 1. Remove the giant background paths. We'll find any path that has "M0 0 C337.92 0 675.84 0 1024 0..."
    # or just remove paths that are extremely large (like 1024x1024).
    # Since we know the exact first path is the background:
    content = re.sub(r'<path d="M0 0 C337\.92.*?/>', '', content)
    
    # 2. Convert dark colors to white, light colors to none
    def hex_to_brightness(hex_color):
        hex_color = hex_color.lstrip('#')
        if len(hex_color) == 3:
            hex_color = ''.join([c*2 for c in hex_color])
        r = int(hex_color[0:2], 16)
        g = int(hex_color[2:4], 16)
        b = int(hex_color[4:6], 16)
        return (r * 299 + g * 587 + b * 114) / 1000

    def replace_color(match):
        color = match.group(1)
        brightness = hex_to_brightness(color)
        if brightness > 200:
            return 'fill="none"'
        else:
            return 'fill="#ffffff"'

    # Re-read from original SVG to be safe
    with open('/workspaces/untitled folder/ChatGPT Image Feb 21, 2026 at 01_45_11 PM.svg', 'r') as f:
        original_content = f.read()

    # Remove the first massive path
    new_content = re.sub(r'<path d="M0 0 C337\.92[^>]+/>', '', original_content)
    
    # Replace colors
    new_content = re.sub(r'fill="([^"]+)"', replace_color, new_content)
    
    # Optional: completely remove paths that ended up with fill="none" to prevent them from catching clicks or rendering issues
    new_content = re.sub(r'<path[^>]*fill="none"[^>]*/>\n?', '', new_content)

    with open(output_file, 'w') as f:
        f.write(new_content)

if __name__ == "__main__":
    process_svg('/workspaces/untitled folder/ChatGPT Image Feb 21, 2026 at 01_45_11 PM.svg', '/workspaces/untitled folder/public/logo-new.svg')
    print("Done")
