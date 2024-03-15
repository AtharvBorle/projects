import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

class VirtualArtGallery extends JFrame {
    private JLabel imageLabel;
    private JButton prevButton, nextButton;
    private ImageIcon[] images;
    private int currentIndex;

    public VirtualArtGallery() {
        setTitle("Virtual Art Gallery");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(600, 400);
        setLocationRelativeTo(null); // Center the window

        // Load images
        images = new ImageIcon[3]; // Change the size based on your images
        images[0] = new ImageIcon("durga.jpg"); // Provide the correct path to your images
        images[1] = new ImageIcon("maharaj.jpg");
        images[2] = new ImageIcon("rk.jpg");

        // Initialize components
        imageLabel = new JLabel(images[0]);
        prevButton = new JButton("Previous");
        nextButton = new JButton("Next");

        // Add action listeners to buttons
        prevButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                showPreviousImage();
            }
        });

        nextButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                showNextImage();
            }
        });

        // Set layout
        setLayout(new BorderLayout());
        JPanel buttonPanel = new JPanel();
        buttonPanel.add(prevButton);
        buttonPanel.add(nextButton);

        // Add components to the content pane
        add(imageLabel, BorderLayout.CENTER);
        add(buttonPanel, BorderLayout.SOUTH);
    }

    private void showPreviousImage() {
        if (currentIndex > 0) {
            currentIndex--;
            imageLabel.setIcon(images[currentIndex]);
        }
    }

    private void showNextImage() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            imageLabel.setIcon(images[currentIndex]);
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new VirtualArtGallery().setVisible(true);
            }
        });
    }
}
