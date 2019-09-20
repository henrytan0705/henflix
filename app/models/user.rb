class User < ApplicationRecord
    validates :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :password, length: { minimum: 6 }, allow_nil: true

    has_many :list,
        foreign_key: :user_id,
        class_name: :List

    has_many :list_shows,
        through: :list,
        source: :video

    #FIGVAPER
    attr_reader :password
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)    
    end
    
    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
    
    def reset_session_token!
        self.update!(session_token: User.generate_session_token)
        self.session_token
    end
end